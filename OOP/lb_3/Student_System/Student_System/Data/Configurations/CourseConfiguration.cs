using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Student_System.Data.Models;

namespace Student_System.Data.Configurations
{
    public class CourseConfiguration : IEntityTypeConfiguration<Courses>
    {
        public void Configure(EntityTypeBuilder<Courses> builder)
        {
            builder
                .Property(c => c.Price)
                .HasColumnType("decimal(18,2)");


            builder
                .HasMany(c => c.StudentsCourses)
                .WithOne(sc => sc.Course)
                .HasForeignKey(sc => sc.CourseId);

            builder
                .HasMany(c => c.Homework)
                .WithOne(sc => sc.Course)
                .HasForeignKey(sc => sc.CourseId);

            builder
                .HasMany(c => c.Resources)
                .WithOne(sc => sc.Course)
                .HasForeignKey(sc => sc.CourseId);
        }
    }
}
