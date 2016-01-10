package ie.gmit.sw;

import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable {

    protected BlockingQueue<Resultable> queue = null;
    Resultable highestScoringResult = new Result(null, 0, Double.MIN_VALUE);

    public Consumer(BlockingQueue queue) {
        this.queue = queue;
    }

    public void run() {
        try {
            //Queue is full, so walk through it and take results off
            while (!queue.isEmpty()) {
                Resultable r = queue.take();
                //If necessary, update the temp variable representing highest scoring result
                if (r.getScore() > highestScoringResult.getScore()) {
                    highestScoringResult = r;
                }
            }

            //Print the highest scoring result
            System.out.println("Highest scoring result: " + highestScoringResult.getPlainText() + " , key of :" + highestScoringResult.getKey());

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}