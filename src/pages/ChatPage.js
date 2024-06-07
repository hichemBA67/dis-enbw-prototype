// src/ChatPage.js
import React, { useState } from "react";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetchChatGPTResponse(input);
    setResponse(result);
  };

  const fetchChatGPTResponse = async (prompt) => {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 150,
        }),
      }
    );
    const data = await response.json();
    return data.choices[0].text.trim();
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type your question..."
        />
        <button type="submit" style={styles.button}>
          Ask
        </button>
      </form>
      {response && <p style={styles.response}>{response}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  input: {
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  response: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default ChatPage;
