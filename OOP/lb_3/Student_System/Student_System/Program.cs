using Microsoft.EntityFrameworkCore;
using Student_System.Data;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<StudentSystemContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("sqlConnection")));


var app = builder.Build();


app.Run();
