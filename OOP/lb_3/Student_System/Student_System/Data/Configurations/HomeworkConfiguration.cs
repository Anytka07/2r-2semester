using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Student_System.Data.Models;

namespace Student_System.Data.Configurations
{
    public class HomeworkConfiguration : IEntityTypeConfiguration<Homework>
    {
        public void Configure(EntityTypeBuilder<Homework> builder)
        {
            builder
                .HasOne(h => h.Course)
                .WithMany(c => c.Homework)
                .HasForeignKey(h => h.CourseId);

            builder
                .HasOne(h => h.Student)
                .WithMany(s => s.Homework)
                .HasForeignKey(h => h.StudentId);
        }
    }
}
