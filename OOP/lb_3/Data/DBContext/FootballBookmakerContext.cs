using Data.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Data.DBContext
{
    public class FootballBookmakerContext : DbContext
    {
        public FootballBookmakerContext(DbContextOptions options)
            : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //В даному випадку, викликаються методи ApplyConfiguration для кожної з конфігурацій сутностей,
            //які дозволяють встановити зв'язки між сутностями, встановити первинні ключі та інші параметри.

            modelBuilder.ApplyConfiguration(new TeamConfiguration());
            modelBuilder.ApplyConfiguration(new ColorConfiguration());
            modelBuilder.ApplyConfiguration(new TownConfiguration());
            modelBuilder.ApplyConfiguration(new CountryConfiguration());
            modelBuilder.ApplyConfiguration(new PlayerConfiguration());
            modelBuilder.ApplyConfiguration(new PositionConfiguration());
            modelBuilder.ApplyConfiguration(new PlayerStatisticConfiguration());
            modelBuilder.ApplyConfiguration(new GameConfiguration());
            modelBuilder.ApplyConfiguration(new BetConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
