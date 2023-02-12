import java.io.IOException;
import java.util.Scanner;

public class second {
    public static void main(String[] args) throws IOException {
        System.out.println("Please, input angel:");
        // створюємо нове посилання a на класс BufferedReader
        Scanner a = new Scanner(System.in);
        // привласнюємо змінній angle типу string значення a
        String angle = a.nextLine();
        // перетворюємо строковий тип змінної angle у тип double
        double x = Double.parseDouble(angle);
        // перетворюємо в радіани
        x = Math.toRadians(x);
        // розраховуємо значення косинуса та синуса
        double cos = Math.cos(x);
        double sin = Math.sin(x);
        // друк значень косинуса на синуса
        System.out.println("cos = " + cos);
        System.out.println("sin = " + sin);
    }
}
