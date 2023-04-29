using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Student_System.Data.Models;

namespace Student_System.Data.Configurations
{
    public class StudentConfiguration : IEntityTypeConfiguration<Students>
    {
        public void Configure(EntityTypeBuilder<Students> builder)
        {
            builder
                .Property(s => s.PhoneNumber)
                .HasMaxLength(10)
                .IsFixedLength();


            builder
                .HasMany(s => s.Homework)
                .WithOne(h => h.Student)
                .HasForeignKey(h => h.StudentId);

            builder
                .HasMany(s => s.StudentsCourses)
                .WithOne(sc => sc.Student)
                .HasForeignKey(sc => sc.StudentId);
        }
    }
}
