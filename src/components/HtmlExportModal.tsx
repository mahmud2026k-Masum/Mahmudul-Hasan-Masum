import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink } from 'lucide-react';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlContent: string;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({
  isOpen,
  onClose,
  htmlContent,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="html-export-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] flex flex-col rounded-3xl bg-[#0b0c10] border border-amber-500/30 text-slate-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/20 bg-black">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-yellow-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-yellow-300">Standalone Single-File HTML Code</h3>
              <p className="text-xs text-amber-200/60">
                Self-contained HTML with Tailwind CDN & vanilla JavaScript (Black & Gold theme)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-yellow-300 border border-amber-500/30 hover:bg-amber-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:brightness-110 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy HTML</span>
                </>
              )}
            </button>

            <button
              id="html-modal-close-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 overflow-auto p-4 bg-black/90 font-mono text-xs text-amber-200/90 select-all leading-relaxed">
          <pre className="whitespace-pre-wrap">{htmlContent}</pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-amber-500/20 bg-black flex items-center justify-between text-xs text-slate-400">
          <span>Ready to deploy as a standalone static HTML file.</span>
          <span className="font-mono text-[11px] text-amber-400/80">WhatsApp: 01832313750</span>
        </div>
      </div>
    </div>
  );
};
