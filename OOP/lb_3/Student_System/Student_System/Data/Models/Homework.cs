using Microsoft.EntityFrameworkCore;
using Student_System.Data.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace Student_System.Data.Models
{
    public class Homework
    {
        [Key]
        public Guid HomeworkId { get; set; }
        [Required]
        [Unicode(false)]
        public string Content { get; set; } = default!;
        [Required]
        public ContentTypes ContentType { get; set; }
        [Required]
        public DateTime SubmissionTime { get; set; }


        public Guid CourseId { get; set; } // FK
        public Courses Course { get; set; } = default!;
        public Guid StudentId { get; set; } // FK
        public Students Student { get; set; } = default!;

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
