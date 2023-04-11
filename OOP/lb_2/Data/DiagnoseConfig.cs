using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;

namespace hospital.Data.EntityConfiguration
{
    public class DiagnoseConfig : IEntityTypeConfiguration<Diagnose>
    {
        public void Configure(EntityTypeBuilder<Diagnose> builder)
        {
            builder
                .HasKey(d => d.DiagnoseId);
            builder.Property(d => d.Name)
                .IsRequired(true)
                .HasColumnType("varchar")
                .HasColumnName("Name")
                .HasMaxLength(50)
                .IsUnicode(true);
            builder.Property(d => d.Comments)
                .IsRequired(false)
                .HasColumnType("varchar")
                .HasColumnName("Comments")
                .HasMaxLength(250)
                .IsUnicode(true);
            builder
                .HasOne(d => d.Patient)
                .WithMany(p => p.Diagnoses)
                .HasForeignKey(d => d.PatientId);
        }
    }
}