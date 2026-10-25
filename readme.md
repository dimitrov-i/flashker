# 🐟 Flashker: Ultimate Vocabulary Flashcards App

> **Version:** 1.0.3 |
> **Codename:** Flounder |
> **Author:** Ivan Dimitrov

---

## 📖 About

This fishy app was made by Ivan to study vocabulary. Because all flashcard apps that I tried were simply sh\*t. Flashker Ultimate is an offline-first vocabulary app for focused learning and review. Organize your own words, choose a study method, and track your progress through a simple interface.

***For more info, see the in-app About section.***

---

## 💡 How to Use

**1. Build your vocabulary.** Import or add word cards in Vocabulary Decks. You can use copy-paste, csv files, or even AI generation. Then assign tags to organize them into study lists.

**2. Choose your mode.** Select the method that suits your practice. There are four distinct study modes, which are described below.

**3. Start studying.** Choose one of your Study Lists, and start learning or reviewing the cards.

**4. Use the gestures.** Swipe left for Wrong, swipe right for Correct, tap to flip, and long-press to edit.

---

## 📚 Study Modes

**BASIC (Continuous review)**

Simple on-demand free practice of the whole study list. Correct cards wait for the next shuffled round, while wrong cards return much sooner. Choose it for flexible practice without waiting for due dates or changing your review schedule.

**IVAN HCC-SRS (Queue mastery)**

Structured practice in small pieces, optionally alternating recall directions and advancing through Leitner boxes. In Flashker, HCC stands for Hierarchical Chunk Consolidation: small card groups are combined into progressively larger review piles. The FSRS formula still calculates next-review due dates, while practice continues independently of them.

**SRS (Leitner-inspired spaced repetition)**

Box-based spaced repetition with adjustable review intervals and penalties for missed answers. Ten boxes track progress. Correct answers advance cards through Leitner boxes with increasing review intervals; mistakes move them back for additional practice. During an SRS session, select any Leitner box to review ready cards or deliberately review ahead of schedule.

**FSRS (Adaptive spaced repetition)**

FSRS-6 (Free Spaced Repetition Scheduler) powers adaptive review scheduling in Anki and other flashcard apps. It uses your recorded recall history and Again, Hard, Good, and Easy ratings to estimate when each card needs another review. This aims to maintain high memory retention with fewer daily reviews than older schedulers such as SM-2. Adjust your desired retention to balance review frequency and workload.

---

## ⚖️ Copyright & License

**Original Code and Assets**

This app is my own work. The original application code and assets are proprietary. No use, referencing, reproduction, or modification is permitted without the author’s express prior written consent, signed physically or digitally.

**Copyright © 2026 Ivan Dimitrov. All rights reserved.**

The copyright also includes the logo and its derivatives, depicting a triplet of nested letters D, merging at the bottom left.

---

## 📦 Third-Party Dependencies

The restrictions above apply only to Flashker’s original code and assets. This project includes the following components under the **MIT License**:

*   **`ts-fsrs` (v5.4.2)** — Spaced repetition scheduling.
    *Copyright © 2026 Open Spaced Repetition*
*   **`Vite` (v8.3.4)** — Bundled module-preload helper.
    *Copyright © 2019-present, VoidZero Inc. and Vite contributors*

---

### MIT License Text

```text
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
