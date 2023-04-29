using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class TownConfiguration : IEntityTypeConfiguration<Towns>
    {
        public void Configure(EntityTypeBuilder<Towns> builder)
        {
            builder // One-to-many - тобто кожне місто може мати багато команд.
                .HasMany(t => t.Teams)
                .WithOne(t => t.Town)
                .HasForeignKey(t => t.TownId);

            builder // Many-to-one - тобто багато міст можуть належати до однієї країни.
                .HasOne(t => t.Country)
                .WithMany(c => c.Towns)
                .HasForeignKey(t => t.CountryId);
        }
    }
}
