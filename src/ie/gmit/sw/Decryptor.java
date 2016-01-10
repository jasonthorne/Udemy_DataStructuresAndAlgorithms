package ie.gmit.sw;

import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CountDownLatch;

public class Decryptor implements Runnable //Producer thread
{
    private CountDownLatch latch;
    private Map<String, Double> quadMap;
    private BlockingQueue<Resultable> queue;
    private String cypherText;
    private int key;
    private int maxKey;

    public Decryptor(CountDownLatch latch, Map<String, Double> quadMap, BlockingQueue<Resultable> queue, String cypherText, int key) {
        super();
        this.latch = latch;
        this.quadMap = quadMap;
        this.queue = queue;
        this.cypherText = cypherText;
        this.key = key;
        this.maxKey += key;
    }

    public void run() {
        //This thread's run() function will call RailFence.decrypt() with a different integer key. Returns the plainText
        //Then call TextScorer.getScore(plainText). Create a Result(key, score, text) and put() it onto the queue.
        RailFence rf = new RailFence(); //create railfence
        TextScorer ts = new TextScorer(quadMap);
        String plainText = rf.decrypt(cypherText, key); //decrypt score
        double score = ts.getScore(plainText);    //get the score

        Resultable r;
        
        
        if (key != maxKey) {
            r = new Result(plainText, key, score);
        } else {
            //Final, poisoned thread
            r = new Result(plainText, key, score, true);
        }

        try {
            //shove onto queue
            System.out.println("Putting onto queue_____Key:" + r.getKey() + ", Score:" + r.getScore() + ", Plain Text:" + r.getPlainText());
            queue.put(r);
            //When the thread is finished, count down the countdown latch. When this hits zero the main thread will stop waiting and continue execution
            latch.countDown();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
}
