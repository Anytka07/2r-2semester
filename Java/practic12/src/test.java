import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Arrays;
import java.util.Map;

import javax.swing.border.EtchedBorder;
import javax.swing.AbstractButton;
import javax.swing.BorderFactory;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class test {
    private int currentQuestions;
    private int currentAnswer = -1;
    private int totalScore = 0;

    private ArrayList<String> questions;
    private ArrayList<Integer> answersToQuestions;
    private ArrayList<Integer> complitedQuestions;
    private Map<Integer, ArrayList<String>> answerList;

    private JFrame frame;
    private JPanel panel;
    private JPanel panel2;
    private JLabel lableQuestions;
    private ButtonGroup group;
    private JRadioButton aRadioButton;
    private JRadioButton bRadioButton;
    private JRadioButton cRadioButton;
    private JRadioButton dRadioButton;
    private JButton buttonnext;

    public void initialize() {
        //#region initialize my var
        questions = new ArrayList<String>() {
            {
                add("Якого кольору сніг?");
                add("Хто найкращий друг Губки Боба?");
                add("Коли в мене день народження?");
                add("Скільки мені років?");
                add("Де знаходиться Ейфелева вежа?");
                add("Як часто я їм на день?");
            }
        };
        answersToQuestions = new ArrayList<Integer>(Arrays.asList(1, 2, 0, 3, 0, 3));
        complitedQuestions = new ArrayList<Integer>();

        answerList = new HashMap<Integer, ArrayList<String>>();
        answerList.put(0, new ArrayList<String>() {
            {
                add("чорний");
                add("білий");
                add("фіолетовий");
                add("червоний");
            }
        });
        answerList.put(1, new ArrayList<String>() {
            {
                add("Крабс");
                add("Сенді");
                add("Патрік"); // +
                add("Сквідварт");
            }
        });
        answerList.put(2, new ArrayList<String>() {
            {
                add("7 жовтня");
                add("2 грудня");
                add("19 липня");
                add("28 березня");
            }
        });
        answerList.put(3, new ArrayList<String>() {
            {
                add("9");
                add("23");
                add("19");
                add("18");
            }
        });
        answerList.put(4, new ArrayList<String>() {
            {
                add("Франція");
                add("Італія");
                add("Англія");
                add("Данія");
            }
        });
        answerList.put(5, new ArrayList<String>() {
            {
                add("3");
                add("5");
                add("6");
                add("4");
            }
        });
        //#endregion

        // #region initialize swing element
        frame = new JFrame("Grouping Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        panel = new JPanel(new GridLayout(0, 1));
        panel2 = new JPanel();
        lableQuestions = new JLabel("What are you doing?");
        group = new ButtonGroup();
        aRadioButton = new JRadioButton("A");
        bRadioButton = new JRadioButton("Б");
        cRadioButton = new JRadioButton("B");
        dRadioButton = new JRadioButton("Г");
        buttonnext = new JButton("Далі");
        // #endregion

        // #region swind add\set element
        panel.add(lableQuestions);
        panel.add(aRadioButton);
        group.add(aRadioButton);
        panel.add(bRadioButton);
        group.add(bRadioButton);
        panel.add(cRadioButton);
        group.add(cRadioButton);
        panel.add(dRadioButton);
        group.add(dRadioButton);

        panel2.add(buttonnext);

        ActionListener findIdAnswerActionListener = new ActionListener() {
            public void actionPerformed(ActionEvent actionEvent) {
                findIdAnswer(actionEvent);
            }
        };

        ActionListener buttonNextActionListener = new ActionListener() {
            public void actionPerformed(ActionEvent actionEvent) {
                buttonNext();
            }
        };

        aRadioButton.addActionListener(findIdAnswerActionListener);
        bRadioButton.addActionListener(findIdAnswerActionListener);
        cRadioButton.addActionListener(findIdAnswerActionListener);
        dRadioButton.addActionListener(findIdAnswerActionListener);
        buttonnext.addActionListener(buttonNextActionListener);

        panel.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createEmptyBorder(4, 4, 2, 4),
                BorderFactory.createEtchedBorder(EtchedBorder.LOWERED)));
        panel2.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createEmptyBorder(2, 4, 4, 4),
                BorderFactory.createEtchedBorder(EtchedBorder.LOWERED)));
        frame.add(panel, BorderLayout.CENTER);
        frame.add(panel2, BorderLayout.PAGE_END);
        // #endregion

        frame.setSize(300, 200);
        frame.setResizable(false);
        takeRandomQuestions();
        frame.setVisible(true);
    }

    protected void findIdAnswer(ActionEvent actionEvent) {
        AbstractButton aButton = (AbstractButton) actionEvent.getSource();
        System.out.println("Selected: " + aButton.getText());

        for (int i = 0; i < answerList.get(currentQuestions).size(); i++) {
            if (answerList.get(currentQuestions).get(i) == aButton.getText()) {
                currentAnswer = i;
                break;
            }
        }
    }

    protected void buttonNext() {
        if (answersToQuestions.get(currentQuestions) == currentAnswer) {
            totalScore += 5;
        } else
            totalScore += 2;
        complitedQuestions.add(currentQuestions);
        group.clearSelection();

        currentAnswer = -1;
        if (takeRandomQuestions()) {
            buttonnext.setEnabled(false);
            lableQuestions.setText("Отже в результаті ваша оцінка: " + (totalScore / 6));
            aRadioButton.setVisible(false);
            bRadioButton.setVisible(false);
            cRadioButton.setVisible(false);
            dRadioButton.setVisible(false);
        }
    }

    protected boolean takeRandomQuestions() {
        if (complitedQuestions.size() >= 6) {
            return true;
        }

        int idQuest = (int) Math.random() * 6;

        boolean isDone = false;
        for (int i = 0; i < complitedQuestions.size(); i++) {
            if (idQuest == complitedQuestions.get(i)) {
                isDone = true;
                break;
            }
        }
        int i = 0;
        while (isDone && i < 6) {
            if (++idQuest > 5) {
                idQuest = 0;
            }
            isDone = false;
            for (int j = 0; j < complitedQuestions.size(); j++) {
                if (idQuest == complitedQuestions.get(j)) {
                    isDone = true;
                    break;
                }
            }
            i++;
        }
        currentQuestions = idQuest;

        // підгрузка запитань за idQuest
        lableQuestions.setText(questions.get(currentQuestions));

        aRadioButton.setText(answerList.get(currentQuestions).get(0));
        bRadioButton.setText(answerList.get(currentQuestions).get(1));
        cRadioButton.setText(answerList.get(currentQuestions).get(2));
        dRadioButton.setText(answerList.get(currentQuestions).get(3));

        return false;
    }

    public static void main(String args[]) {
        new test().initialize();
    }
}