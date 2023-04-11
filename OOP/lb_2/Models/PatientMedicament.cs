using hospital.Data.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.Data.Models
{
    [Table("PatientMedicaments")]
    public class PatientMedicament
    {
        //Ïðîì³æíà òàáëèöÿ ç äâîìà çîâí³øí³ìè êëþ÷àìè

        [Required]
        [ForeignKey("Medicament")]
        public int MedicamentId { get; set; }
        public Medicament Medicament { get; set; }

        [Required]
        [ForeignKey("Patient")]
        public int PatientId { get; set; }
        public Patient Patient { get; set; }

    }
}