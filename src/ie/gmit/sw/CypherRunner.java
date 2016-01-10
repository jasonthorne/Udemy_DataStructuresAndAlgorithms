package ie.gmit.sw;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.*;

public class CypherRunner {

    public static void main(String[] args) throws Exception {
    	
        //Get cypher text
        String cypherText = "TTFOHATGRNREEANOETYRCIMHHAKT";
        //We are walking from 2 -> N, where N = half the cypher text length.
        int threadPoolSize = (cypherText.length() / 2) - 1;
        //Create a countdown latch which enables waiting for all the producer threads to finish
        final CountDownLatch latch = new CountDownLatch(threadPoolSize);
        //Create a BlockingQueue to place the result from each producer thread in a FIFO queue
        BlockingQueue<Resultable> producerQueue = new ArrayBlockingQueue<>(threadPoolSize);
        //Create a map of quadgrams and frequencies from file (4 character strings and doubles)
        Map<String, Double> quadMap = getQuadMapFromFile();
        //Create a producer thread for each possible 2 -> N integer key
        for (int i = 2; i <= cypherText.length() / 2; i++) {
            //The decryptor producer thread calculates the score for the key and places the resultant text on the producerQueue
            Decryptor decryptor = new Decryptor(latch, quadMap, producerQueue, cypherText, i);
            new Thread(decryptor).start();
        }

        System.out.println("Awaiting producer threads...");
        //Calling await on the countdown latch blocks the main thread until all the decryptor threads have place their result on the queue
        latch.await();

        System.out.println("Executing consumer thread!");

        //Now the queue is full, start consuming the results on another thread. This thread will print the text with the highest score.
        Consumer consumer = new Consumer(producerQueue);
        new Thread(consumer).start();

    }

    /**
     * @return A ConcurrentHashMap of n-gram Strings and frequency doubles from the 4grams.txt file
     */
    
    public static Map<String, Double> getQuadMapFromFile() {
        //Open 4grams.txt
        //Add each line to the map
        //return map

        Map<String, Double> quadMap = new ConcurrentHashMap<>();
        File file = new File("4grams.txt");
        BufferedReader reader = null;

        try {
            reader = new BufferedReader(new FileReader(file));
            String text = null;

            while ((text = reader.readLine()) != null) {
                String[] string = text.split(" ");
                quadMap.put(string[0], Double.valueOf(string[1]));
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
            }
        }

        return quadMap;
    }
}
