using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Student_System.Data.Models;

namespace Student_System.Data.Configurations
{
    public class StudentCourseConfiguration : IEntityTypeConfiguration<StudentsCourses>
    {
        public void Configure(EntityTypeBuilder<StudentsCourses> builder)
        {
            builder.HasKey(sc => new { sc.StudentId, sc.CourseId });

            builder
                .HasOne(sc => sc.Course)
                .WithMany(c => c.StudentsCourses)
                .HasForeignKey(sc => sc.CourseId);

            builder
                .HasOne(sc => sc.Student)
                .WithMany(s => s.StudentsCourses)
                .HasForeignKey(sc => sc.StudentId);
        }
    }
}
