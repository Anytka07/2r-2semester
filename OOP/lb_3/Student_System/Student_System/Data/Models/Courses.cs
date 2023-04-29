using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace Student_System.Data.Models
{
    public class Courses
    {
        [Key]
        public Guid CourseId { get; set; }
        [MaxLength(50)]
        [Required]
        public string Name { get; set; } = default!;
        [Unicode(true)]
        public string? Description { get; set; } = default!;
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public decimal Price { get; set; }


        public ICollection<Resources> Resources { get; set; } = new List<Resources>();
        public ICollection<Homework> Homework { get; set; } = new List<Homework>();
        public ICollection<StudentsCourses> StudentsCourses { get; set; } = new List<StudentsCourses>();

        public override string ToString()
        {
            return JsonSerializer // for visual display of values
                .Serialize(this, new JsonSerializerOptions
                {
                    WriteIndented = true, // spaces are included in json (relatively speaking, for beauty)
                    ReferenceHandler = ReferenceHandler.Preserve // "Preserve" to avoid circular references
                });
        }
    }
}
