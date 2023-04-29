using Microsoft.EntityFrameworkCore;
using Student_System.Data.Configurations;
using Student_System.Data.Models;

namespace Student_System.Data
{
    public class StudentSystemContext : DbContext
    {
        public DbSet<Students> Students { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<Resources> Resources { get; set; }
        public DbSet<Homework> Homework { get; set; }
        public DbSet<StudentsCourses> StudentsCourses { get; set; }

        public StudentSystemContext(DbContextOptions<StudentSystemContext> options)
            : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new StudentConfiguration());
            modelBuilder.ApplyConfiguration(new CourseConfiguration());
            modelBuilder.ApplyConfiguration(new ResourceConfiguration());
            modelBuilder.ApplyConfiguration(new HomeworkConfiguration());
            modelBuilder.ApplyConfiguration(new StudentCourseConfiguration());

            
            modelBuilder.Entity<Students>().HasData(Students);
            modelBuilder.Entity<Courses>().HasData(Courses);
            modelBuilder.Entity<Resources>().HasData(Resources);
            modelBuilder.Entity<Homework>().HasData(Homework);
            modelBuilder.Entity<StudentsCourses>().HasData(StudentsCourses);
        }
    }
}
