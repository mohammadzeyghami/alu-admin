export const limitWords = <T extends string>(sentence: T, limit: number): T => {
  const words = sentence.split(" ");

  if (words.length > limit) {
    // اگر تعداد کلمات بیشتر از محدودیت است، جایگزینی با ...
    const truncatedSentence = words.slice(0, limit).join(" ") + "...";
    return truncatedSentence as T;
  }

  // اگر تعداد کلمات به محدودیت نرسیده باشد، جمله را بدون تغییر بازگردانیم
  return sentence;
};
