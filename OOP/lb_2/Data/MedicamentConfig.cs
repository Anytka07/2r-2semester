using hospital.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;

namespace hospital.Data.EntityConfiguration
{
    public class MedicamentConfig : IEntityTypeConfiguration<Medicament>
    {
        public void Configure(EntityTypeBuilder<Medicament> builder)
        {
            builder
                .HasKey(m => m.MedicamentId);
            builder.Property(m => m.Name)
                .IsRequired(true)
                .HasColumnType("varchar")
                .HasColumnName("Name")
                .HasMaxLength(50)
                .IsUnicode(true);
        }
    }
}