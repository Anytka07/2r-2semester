using hospital.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;

namespace hospital.Data.EntityConfiguration
{
    public class PatientConfig : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder
                .HasKey(p => p.PatientId);
            builder.Property(p => p.FirstName)
                .IsRequired(true)
                .HasColumnName("FirstName")
                .HasColumnType("varchar")
                .HasMaxLength(50)
                .IsUnicode(true);
            builder.Property(p => p.LastName)
                .IsRequired(true)
                .HasColumnName("LastName")
                .HasColumnType("varchar")
                .HasMaxLength(50)
                .IsUnicode(true);
            builder.Property(p => p.Address)
                .IsRequired(true)
                .HasColumnName("Address")
                .HasColumnType("varchar")
                .HasMaxLength(250)
                .IsUnicode(true);
            builder.Property(p => p.Email)
                .IsRequired(true)
                .HasColumnName("Email")
                .HasColumnType("varchar")
                .HasMaxLength(80)
                .IsUnicode(false);
            builder.Property(p => p.HasInsurance)
                .IsRequired(true)
                .HasColumnName("HasInsurance")
                .HasColumnType("bit");

        }
    }
}