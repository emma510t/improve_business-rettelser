import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PageTagBreadcrumb({ dark, currentPage, parent, parentHRef, grandParent, grandParentHRef }) {
  return (
    <Breadcrumb className="mb-[9px]">
      <BreadcrumbList className={`text-ibsilver-400 font-poppins text-base ${dark && "text-ibsilver-100"}`}>
        {grandParent && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={grandParentHRef}>{grandParent}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {parent && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={parentHRef}>{parent}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem className={`text-ibgreen-600 ${dark && "text-ibgreen-200"}`}>{currentPage}</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
