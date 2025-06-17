// components/FloatingInput.tsx
import './FloatingInput.css';

type FloatingInputProps = {
  readonly label: string;
  readonly type: 'text' | 'number' | 'date' | 'password';
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FloatingInput({ label, type, name, value, onChange }: FloatingInputProps) {
  return (
    <div className="floating-input-group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
        className={`floating-input ${type === 'number' ? 'numeric' : ''}`}
        autoComplete="off"
        placeholder=" "
        step="any" // permite decimais
        inputMode={type === 'number' ? 'decimal' : undefined}
      />
      <label htmlFor={name} className="floating-label">
        {label}
      </label>
    </div>
  );
}
