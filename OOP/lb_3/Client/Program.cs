using Data.DBContext;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<FootballBookmakerContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("sqlConnection"),
        options => options.MigrationsAssembly("Client")));


var app = builder.Build();


app.Run();
