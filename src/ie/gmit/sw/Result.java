package ie.gmit.sw;

public class Result implements Resultable 
{
	private String plainText;
	private int key;
	private double score;
	private boolean isPoisoned = false;
	
	
	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#getPlainText()
	 */
	public String getPlainText() {
		return plainText;
	}


	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#setPlainText(java.lang.String)
	 */
	public void setPlainText(String plainText) {
		this.plainText = plainText;
	}

	public boolean isPoisoned() {
		return isPoisoned;
	}


	public void setPoisoned(boolean isPoisoned) {
		this.isPoisoned = isPoisoned;
	}


	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#getKey()
	 */
	public int getKey() {
		return key;
	}


	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#setKey(int)
	 */
	public void setKey(int key) {
		this.key = key;
	}


	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#getScore()
	 */
	public double getScore() {
		return score;
	}


	/* (non-Javadoc)
	 * @see ie.gmit.sw.Resultable#setScore(double)
	 */
	public void setScore(double score) {
		this.score = score;
	}


	public Result(String plainText, int key, double score) {
		this(plainText, key, score, false);
	}
	
	public Result(String plainText, int key, double score, boolean isPoisoned) {
		super();
		this.plainText = plainText;
		this.key = key;
		this.score = score;
		this.isPoisoned = isPoisoned;
	}
}
