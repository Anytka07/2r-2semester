using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class BetConfiguration : IEntityTypeConfiguration<Bets>
    {
        public void Configure(EntityTypeBuilder<Bets> builder)
        {
            builder
                .Property(b => b.Amount)
                .HasColumnType("decimal(18, 5)");


            builder // Many to one - Bets to Games
                .HasOne(b => b.Game)
                .WithMany(g => g.Bets)
                .HasForeignKey(b => b.GameId);

            builder // Many to one - Bets to Users
                .HasOne(b => b.User)
                .WithMany(u => u.Bets)
                .HasForeignKey(b => b.UserId);
        }
    }
}
