using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class PositionConfiguration : IEntityTypeConfiguration<Positions>
    {
        public void Configure(EntityTypeBuilder<Positions> builder)
        {
        }
    }
}
