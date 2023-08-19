import { filesize } from 'filesize'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

import { Button } from '@/components/Button'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: 'transition-colors',
  },

  variants: {
    state: {
      progress: { container: '' },
      complete: { container: 'border-violet-500' },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

type FileInputFileItemProps = VariantProps<typeof fileItem> & {
  name: string
  size: number
}

export function FileInputFileItem(props: FileInputFileItemProps) {
  const { name, size, state } = props
  const { container, icon, deleteButton } = fileItem({ state })

  const formattedSize = filesize(size, { round: 1 }) as string

  const isCompleted = state === 'complete'
  const hasError = state === 'error'

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {hasError ? (
        <div className="flex flex-1 flex-col items-start">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please tray again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 transition-colors hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formattedSize}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full bg-violet-600"
                style={{ width: isCompleted ? '100%' : '80%' }}
              />
            </div>

            <span className="text-sm font-medium text-zinc-900">
              {isCompleted ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {isCompleted ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
