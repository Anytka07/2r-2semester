using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class TeamConfiguration : IEntityTypeConfiguration<Teams>
    {
        public void Configure(EntityTypeBuilder<Teams> builder)
        {
            builder // Many-to-one - відношення між командами та кольорами для головного комплекту форми;
                .HasOne(t => t.PrimaryKitColor)
                .WithMany(c => c.Teams_PrimaryKitColor)
                .HasForeignKey(t => t.PrimaryKitColorId)
                .OnDelete(DeleteBehavior.NoAction);

            builder // Many-to-one - відношення між командами та кольорами для запасного комплекту форми;
                .HasOne(t => t.SecondaryKitColor)
                .WithMany(c => c.Teams_SecondaryKitColor)
                .HasForeignKey(t => t.SecondaryKitColorId)
                .OnDelete(DeleteBehavior.NoAction);

            builder // Many-to-one - відношення між командами та містами, в яких вони базуються;  
                .HasOne(t => t.Town)
                .WithMany(t => t.Teams)
                .HasForeignKey(t => t.TownId);

            builder // One-to-many - що кожна команда може мати декілька гравців
                .HasMany(t => t.Players)
                .WithOne(p => p.Team)
                .HasForeignKey(p => p.TeamId);

            builder // One-to-many - щоб вказати, що кожна команда може грати в декількох іграх як господар
                .HasMany(t => t.Games_HomeTeam)
                .WithOne(p => p.HomeTeam)
                .HasForeignKey(p => p.HomeTeamId);

            builder // One-to-many - щоб вказати, що кожна команда може грати в декількох іграх як гість.
                .HasMany(t => t.Games_AwayTeam)
                .WithOne(p => p.AwayTeam)
                .HasForeignKey(p => p.AwayTeamId);
        }
    }
}
