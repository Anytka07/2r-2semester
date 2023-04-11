using System;
using hospital.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace hospital.Migrations
{
    [DbContext(typeof(HospitalContext))]
    [Migration("11")]
    partial class InitialCreate
    {
        protected  void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("hospital.Data.Models.Diagnose", b =>
            {
                b.Property<int>("DiagnoseId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                b.Property<string>("Comments")
                    .HasColumnName("Comments")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(250)
                    .IsUnicode(true);

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnName("Name")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(50)
                    .IsUnicode(true);

                b.Property<int>("PatientId")
                    .HasColumnType("int");

                b.HasKey("DiagnoseId");

                b.HasIndex("PatientId");

                b.ToTable("Diagnoses");
            });

            modelBuilder.Entity("hospital.Data.Models.Doctor", b =>
            {
                b.Property<int>("DoctorId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnType("nvarchar(100)")
                    .HasMaxLength(100);

                b.Property<string>("Specialty")
                    .IsRequired()
                    .HasColumnType("nvarchar(100)")
                    .HasMaxLength(100);

                b.HasKey("DoctorId");

                b.ToTable("Doctor");
            });

            modelBuilder.Entity("hospital.Data.Models.Medicament", b =>
            {
                b.Property<int>("MedicamentId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnName("Name")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(50)
                    .IsUnicode(true);

                b.HasKey("MedicamentId");

                b.ToTable("Medicaments");
            });

            modelBuilder.Entity("hospital.Data.Models.Patient", b =>
            {
                b.Property<int>("PatientId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                b.Property<string>("Address")
                    .IsRequired()
                    .HasColumnName("Address")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(250)
                    .IsUnicode(true);

                b.Property<string>("Email")
                    .IsRequired()
                    .HasColumnName("Email")
                    .HasColumnType("varchar")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                b.Property<string>("FirstName")
                    .IsRequired()
                    .HasColumnName("FirstName")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(50)
                    .IsUnicode(true);

                b.Property<bool>("HasInsurance")
                    .HasColumnName("HasInsurance")
                    .HasColumnType("bit");

                b.Property<string>("LastName")
                    .IsRequired()
                    .HasColumnName("LastName")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(50)
                    .IsUnicode(true);

                b.HasKey("PatientId");

                b.ToTable("Patients");
            });

            modelBuilder.Entity("hospital.Data.Models.PatientMedicament", b =>
            {
                b.Property<int>("PatientId")
                    .HasColumnType("int");

                b.Property<int>("MedicamentId")
                    .HasColumnType("int");

                b.HasKey("PatientId", "MedicamentId");

                b.HasIndex("MedicamentId");

                b.ToTable("PatientMedicaments");
            });

            modelBuilder.Entity("hospital.Data.Models.Visitation", b =>
            {
                b.Property<int>("VisitationId")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                b.Property<string>("Comments")
                    .IsRequired()
                    .HasColumnName("Comments")
                    .HasColumnType("nvarchar")
                    .HasMaxLength(250)
                    .IsUnicode(true);

                b.Property<DateTime>("Date")
                    .HasColumnName("Date")
                    .HasColumnType("DateTime");

                b.Property<int>("DoctorId")
                    .HasColumnType("int");

                b.Property<int>("PatientId")
                    .HasColumnType("int");

                b.HasKey("VisitationId");

                b.HasIndex("DoctorId");

                b.HasIndex("PatientId");

                b.ToTable("Visitations");
            });

            modelBuilder.Entity("hospital.Data.Models.Diagnose", b =>
            {
                b.HasOne("hospital.Data.Models.Patient", "Patient")
                    .WithMany("Diagnoses")
                    .HasForeignKey("PatientId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();
            });

            modelBuilder.Entity("hospital.Data.Models.PatientMedicament", b =>
            {
                b.HasOne("hospital.Data.Models.Medicament", "Medicament")
                    .WithMany("Prescriptions")
                    .HasForeignKey("MedicamentId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasOne("hospital.Data.Models.Patient", "Patient")
                    .WithMany("Prescriptions")
                    .HasForeignKey("PatientId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();
            });

            modelBuilder.Entity("hospital.Data.Models.Visitation", b =>
            {
                b.HasOne("hospital.Data.Models.Doctor", "Doctor")
                    .WithMany("Visitations")
                    .HasForeignKey("DoctorId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasOne("hospital.Data.Models.Patient", "Patient")
                    .WithMany("Visitations")
                    .HasForeignKey("PatientId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();
            });
#pragma warning restore 612, 618
        }
    }
}