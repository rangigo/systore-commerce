import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <div className="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition linear-out duration-150">
    <Image
      className={className}
      src="/systore-icon.jpg"
      alt="Logo Image"
      // The cart item image is already optimized and very small in size
      unoptimized
      width={props.width ?? '32px'}
      height={props.height ?? '32px'}
    />
  </div>
)

export default Logo
