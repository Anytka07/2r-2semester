using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Student_System.Data.Models;

namespace Student_System.Data.Configurations
{
    public class ResourceConfiguration : IEntityTypeConfiguration<Resources>
    {
        public void Configure(EntityTypeBuilder<Resources> builder)
        {
            builder
                .HasOne(r => r.Course)
                .WithMany(c => c.Resources)
                .HasForeignKey(r => r.CourseId);
        }
    }
}
