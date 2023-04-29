using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class PlayerConfiguration : IEntityTypeConfiguration<Players>
    {
        public void Configure(EntityTypeBuilder<Players> builder)
        {
            builder // Many-to-One: кожен гравець має одну позицію, а кожна позиція може мати багато гравців.
                .HasOne(p => p.Position)
                .WithMany(p => p.Players)
                .HasForeignKey(p => p.PositionId);

            builder // Many-to-One: кожен гравець має одну команду, а кожна команда може мати багато гравців.
                .HasOne(p => p.Team)
                .WithMany(t => t.Players)
                .HasForeignKey(p => p.TeamId);

            builder // One-to-Many: кожен гравець може мати багато записів в статистиці гравців,
                    // а кожен запис статистики гравця належить до одного гравця.
                .HasMany(p => p.PlayerStatistics)
                .WithOne(ps => ps.Player)
                .HasForeignKey(ps => ps.PlayerId);
        }
    }
}
