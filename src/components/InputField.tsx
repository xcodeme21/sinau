import { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    label: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ icon, label, ...props }, ref) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    {...props} // <-- spread semua props dari register ke input
                    className="w-full pl-11 pr-4 py-3.5 white border border-gray-200 rounded-xl
            focus:border-purple-500 focus:ring-1 focus:ring-purple-500
            outline-none transition-colors text-gray-800 text-base"
                />
            </div>
        </div>
    )
);

InputField.displayName = 'InputField';
