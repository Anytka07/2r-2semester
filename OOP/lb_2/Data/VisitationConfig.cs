using hospital.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;

namespace hospital.Data.EntityConfiguration
{
    public class VisitationConfig : IEntityTypeConfiguration<Visitation>
    {
        public void Configure(EntityTypeBuilder<Visitation> builder)
        {
            builder
                .HasKey(v => v.VisitationId);
            builder.Property(v => v.Date)
                .IsRequired(true)
                .HasColumnName("Date")
                .HasColumnType("Date");
            builder.Property(v => v.Comments)
                .IsRequired(true)
                .HasColumnName("Comments")
                .HasColumnType("varchar")
                .HasMaxLength(250)
                .IsUnicode(true);
            builder
                .HasOne(p => p.Patient)
                .WithMany(v => v.Visitations)
                .HasForeignKey(p => p.PatientId);
            builder
                .HasOne(d => d.Doctor)
                .WithMany(v => v.Visitations)
                .HasForeignKey(d => d.DoctorId);
        }
    }
}