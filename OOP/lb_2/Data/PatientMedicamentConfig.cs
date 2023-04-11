﻿using hospital.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using hospital.Data.Models;

namespace hospital.Data.EntityConfiguration
{
    public class PatientMedicamentConfig : IEntityTypeConfiguration<PatientMedicament>
    {
        public void Configure(EntityTypeBuilder<PatientMedicament> builder)
        {
            builder.HasKey(p => new { p.PatientId, p.MedicamentId });
            builder
                .HasOne(p => p.Patient)
                .WithMany(p => p.Prescriptions)
                .HasForeignKey(p => p.PatientId);
            builder
                .HasOne(p => p.Medicament)
                .WithMany(p => p.Prescriptions)
                .HasForeignKey(m => m.MedicamentId);
        }
    }
}