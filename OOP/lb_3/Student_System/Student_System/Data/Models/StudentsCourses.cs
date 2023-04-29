using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace Student_System.Data.Models
{
    public class StudentsCourses
    {
        [Key]
        public Guid StudentId { get; set; }
        public Students Student { get; set; } = default!;


        [Key]
        public Guid CourseId { get; set; }
        public Courses Course { get; set; } = default!;

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
