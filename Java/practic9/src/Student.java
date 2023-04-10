import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Student
{
    private String name;
    private int course;

    public Student(int course, String name)
    {
        this.setName(name);
        this.setCourse(course);
    }

    public Student(Student otherStudent)
    {
        this(otherStudent.course, otherStudent.name);
    }

    public void copy_from(Student otherStudent){
        this.name = otherStudent.name;
        this.course = otherStudent.course;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public int getCourse()
    {
        return course;
    }

    public void setCourse(int course)
    {
        this.course = course;
    }

    public static void printList(List students, int course)
    {
        System.out.println("Список студентів які навчаються на (" + course + ") курсі:");
        for (Iterator i = students.iterator(); i.hasNext();) {
            Student st = (Student) i.next();
            if (st.getCourse() == course) {
                System.out.println(st.getName());
            }
        }
    }

    public static void main(String[] args)
    {
        List<Student> myList = new ArrayList<Student>();
        myList.add(new Student(1, "Анька"));
        myList.add(new Student(3, "Іванка"));
        myList.add(new Student(2, "Саньок"));
        myList.add(new Student(3, "Валера"));
        myList.add(new Student(4, "Ксюша"));
        myList.add(new Student(4, "Колька"));

        Student x = new Student(2, "Юрко");
        Student y = new Student(x);
        myList.add(y);


        printList(myList, 1);
        printList(myList, 2);
        printList(myList, 3);

    }
}