using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Tables;

namespace Data.Configurations
{
    public class CountryConfiguration : IEntityTypeConfiguration<Countries>
    {
        public void Configure(EntityTypeBuilder<Countries> builder)
        {
            builder // One to many - Countries to Towns
                .HasMany(c => c.Towns)
                .WithOne(t => t.Country)
                .HasForeignKey(t => t.CountryId);
        }
        //Це налаштування встановлює зв'язок між таблицею Countries та таблицею Towns через поле CountryId.
        //Кожен запис в таблиці Countries може мати багато записів в таблиці Towns,
        //але кожен запис в таблиці Towns може мати лише один запис в таблиці Countries.
    }
}
