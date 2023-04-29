using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Student_System.Data.Models
{
    public class Students
    {
        [Key]
        public Guid StudentId { get; set; }
        [MaxLength(100)]
        [Required]
        public string Name { get; set; } = default!;
        [Required]
        public string PhoneNumber { get; set; } = default!;
        [Required]
        public bool RegisteredOn { get; set; }
        public DateTime? Birthday { get; set; }


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
