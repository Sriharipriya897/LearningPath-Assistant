import { SYSTEM_PROMPT } from '../constants/prompts';

export const generateResponse = async (query) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For prototype, we generate a structured response based on the query.
    // In a real app, this would call an LLM API with the SYSTEM_PROMPT.

    const topic = query.replace(/(explain|what is|define|tell me about)/i, '').trim();

    return `
# 1️⃣ STUDENT PROFILE DETECTION
**Student:** Alex Kumar | **Branch:** CSE | **Level:** Intermediate

# 2️⃣ QUESTION UNDERSTANDING
You asked to learn about **${topic}**. I will explain this concept simply, focusing on its engineering applications.

# 3️⃣ CONCEPT EXPLANATION
**${topic}** can be defined as a fundamental concept in this field.

1. **Step 1:** It starts with Understanding the basics.
2. **Step 2:** We apply core principles.
3. **Step 3:** The result is a specialized system.

> **Simple definition:** Think of it like a library where books are organized (Data Structures) or decision making (Algorithms).

# 4️⃣ REAL-WORLD APPLICATION
- **Industry:** Used in large-scale software systems.
- **Daily Life:** How Netflix recommends movies.
- **Engineering:** Optimizing resource allocation.

# 5️⃣ PRACTICE SUPPORT
**Q1:** What is the primary goal of ${topic}?
- A) Confusion
- B) Optimization ✅
- C) Destruction

**Q2:** Where is it mostly used?
- A) Cooking
- B) Computing ✅

# 6️⃣ PERSONALIZED FEEDBACK
"Great effort, Alex! You are grasping the basics of ${topic} well."

# 7️⃣ NEXT LEARNING SUGGESTIONS
- Try implementing a basic version in code.
- Read about Advanced ${topic}.

# 8️⃣ SYSTEM CAPABILITIES SUMMARY
*Remember, I am here 24/7 to help you master Engineering concepts!*
`;
};
