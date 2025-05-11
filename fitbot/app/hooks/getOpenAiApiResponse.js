export const getOpenAiApiResponse = async (message) => {
  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('AI Response:', data);

    return data.result?.trim() || 'Sorry, no response.';
  } catch (error) {
    console.error('Error fetching AI response:', error.message || error);
    return 'Error communicating with the AI.';
  }
};
