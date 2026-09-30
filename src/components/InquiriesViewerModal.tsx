import React, { useState, useEffect } from 'react';
import { X, Inbox, RefreshCw, Mail, Phone, MessageCircle, Clock, CheckCircle2, User } from 'lucide-react';
import { BackendInquiry } from '../types';
import { OWNER_INFO } from '../data/portfolioData';

interface InquiriesViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesViewerModal: React.FC<InquiriesViewerModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<BackendInquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.status === 'success' && Array.isArray(data.inquiries)) {
        setInquiries(data.inquiries);
      } else {
        throw new Error('Could not fetch inquiries.');
      }
    } catch (err: any) {
      console.error('Fetch inquiries failed:', err);
      setError('Could not reach backend API endpoint. dev server might be reloading.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="inquiries-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="inquiries-modal-content"
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Backend Leads & Received Inquiries
              </h3>
              <p className="text-xs text-slate-500">
                Connected to VS Technology server API (`/api/inquiries`) • {OWNER_INFO.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-blue-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs border border-rose-200">
              {error}
            </div>
          )}

          {inquiries.length === 0 && !loading ? (
            <div className="text-center py-12 space-y-2 text-slate-500">
              <Inbox className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold">No new inquiries yet.</p>
              <p className="text-xs text-slate-400">
                Submit the contact form on the home page to test real-time backend delivery!
              </p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:bg-white hover:shadow-xs transition-all"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{inq.name}</span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                      {inq.service}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(inq.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                {/* Contact metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>{inq.email}</span>
                  </div>
                  {inq.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{inq.phone}</span>
                    </div>
                  )}
                  {inq.budget && (
                    <div className="text-[11px] text-slate-500">
                      <strong>Budget:</strong> {inq.budget}
                    </div>
                  )}
                  <div className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Synced to backend database</span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 whitespace-pre-wrap">
                  "{inq.message}"
                </div>

                {/* Direct Action Link */}
                <div className="flex items-center justify-end gap-2 pt-1">
                  <a
                    href={inq.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Open on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${inq.email}?subject=Re:%20Inquiry%20from%20Entire%20Digital%20Solution`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Reply via Email</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Target Inbox: <strong>{OWNER_INFO.email}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
