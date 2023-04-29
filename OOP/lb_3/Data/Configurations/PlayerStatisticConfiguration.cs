using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class PlayerStatisticConfiguration : IEntityTypeConfiguration<PlayerStatistics>
    {
        public void Configure(EntityTypeBuilder<PlayerStatistics> builder)
        {
            //композитний ключ, що складається з двох зовнішніх ключів - PlayerId та GameId.
            builder.HasKey(ps => new { ps.PlayerId, ps.GameId });

            builder // Many-to-one - встановлює зв'язок між таблицею PlayerStatistics та Players,
                    // де один гравець може мати багато різних записів статистики.
                .HasOne(ps => ps.Player)
                .WithMany(p => p.PlayerStatistics)
                .HasForeignKey(ps => ps.PlayerId);

            builder // Many-to-one - встановлює зв'язок між таблицею PlayerStatistics та Games,
                    // де одна гра може мати багато різних записів статистики.
                .HasOne(ps => ps.Game)
                .WithMany(g => g.PlayerStatistics)
                .HasForeignKey(ps => ps.GameId);

        }
    }
}
