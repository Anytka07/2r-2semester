import java.io.File;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Отримати шлях до каталогу від користувача
        System.out.print("Введіть шлях до каталогу: ");
        String directoryPath = scanner.nextLine();

        // Створити об'єкт класу File
        File directory = new File(directoryPath);

        // Перевірити, чи існує каталог
        if (!directory.isDirectory()) {
            System.out.println("Каталогу не існує.");
            return;
        }

        // Отримати список файлів у каталозі
        File[] files = directory.listFiles();

        // Перевірити, чи є файли в каталозі
        if (files == null || files.length == 0) {
            System.out.println("Каталог порожній.");
            return;
        }

        // Порахувати кількість файлів
        int fileCount = files.length;

        // Вивести список файлів
        System.out.println("Файли у каталозі:");
        for (File file : files) {
            System.out.println(file.getName());
        }

        // Запитати користувача про видалення файлів
        System.out.printf("Ви дійсно бажаєте видалити %d файлів у каталозі %s? (Y/N): ", fileCount, directoryPath);
        String confirmation = scanner.nextLine();

        if (!confirmation.equalsIgnoreCase("Y")) {
            System.out.println("Видалення файлів скасовано.");
            return;
        }

        // Видалити файли
        for (File file : files) {
            file.delete();
        }

        System.out.printf("%d файлів успішно видалено з каталогу %s.\n", fileCount, directoryPath);
    }
}