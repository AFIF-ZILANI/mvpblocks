'use client';

import { Check, Copy } from 'lucide-react';
import { Button } from './button';
import { memo, useCallback, useState } from 'react';

function CopyButtonImpl({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <Button
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy License</span>
        </>
      )}
    </Button>
  );
}

export const CopyButton = memo(CopyButtonImpl);
