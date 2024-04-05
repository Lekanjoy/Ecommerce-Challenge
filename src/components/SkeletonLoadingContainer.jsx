import SkeletonLoading from './SkeletonLoading'

const SkeletonLoadingContainer = () => {
  return (
    <section className="grid grid-cols-1 gap-y-6 gap-x-4 place-items-center w-full md:grid-cols-3 lg:grid-cols-4">
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
    </section>
  );
}

export default SkeletonLoadingContainer