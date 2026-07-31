"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Remove toast after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-8 right-8 z-[200] space-y-2 max-w-sm w-full pointer-events-none px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-xl shadow-xl text-white font-medium flex items-center gap-3 pointer-events-auto transition-all duration-300 transform translate-y-0 opacity-100 ${
              toast.type === "success"
                ? "bg-[#ab2f00] border border-orange-300/20"
                : "bg-red-600 border border-red-400/20"
            }`}
          >
            <span className="material-symbols-outlined">
              {toast.type === "success" ? "check_circle" : "error"}
            </span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
