using hospital.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;
using System;

namespace hospital.Data.EntityConfiguration
{
    public class DoctorConfig : IEntityTypeConfiguration<Doctor>
    {
        public void Configure(EntityTypeBuilder<Doctor> builder)
        {
            builder.HasKey(d => d.DoctorId);
            builder.Property(d => d.Name)
                .IsRequired(true)
                .HasColumnName("Name")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsUnicode(true);
            builder.Property(d => d.Specialty)
                .IsRequired(true)
                .HasColumnName("Specialty")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsUnicode(true);
        }
    }
}