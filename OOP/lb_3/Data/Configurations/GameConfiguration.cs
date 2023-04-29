using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class GameConfiguration : IEntityTypeConfiguration<Games>
    {
        public void Configure(EntityTypeBuilder<Games> builder)
        {
            //Тобто, кожна гра має багато записів у PlayerStatistics і Bets, але кожен запис у PlayerStatistics і Bets належить тільки до однієї гри
            builder // One to many - Games to PlayerStatistics
                .HasMany(g => g.PlayerStatistics)
                .WithOne(ps => ps.Game)
                .HasForeignKey(ps => ps.GameId);

            builder // One to many - Games to Bets
                .HasMany(g => g.Bets)
                .WithOne(b => b.Game)
                .HasForeignKey(b => b.GameId);

            //Кожна гра має по одній домашній та одній виїзній команді, тому кожен запис у Games має посилання на конкретну команду, яка бере участь у грі.
            builder // Many to one - Games to Teams
                .HasOne(g => g.HomeTeam)
                .WithMany(t => t.Games_HomeTeam)
                .HasForeignKey(g => g.HomeTeamId)
                .OnDelete(DeleteBehavior.NoAction);

            builder // Many to one - Games to Teams
                .HasOne(g => g.AwayTeam)
                .WithMany(t => t.Games_AwayTeam)
                .HasForeignKey(g => g.AwayTeamId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
