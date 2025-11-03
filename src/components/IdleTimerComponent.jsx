import React from "react";
import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

export default function IdleTimerComponent() {
  const onIdle = () => {
    toast.warning("⚠️ Ви неактивні протягом 1 хвилини!");
  };

  useIdleTimer({
    timeout: 60 * 1000, // 1 хвилина
    onIdle,
    debounce: 500,
  });

  return null;
}
