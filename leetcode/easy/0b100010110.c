//278 - first bad version.
//time
//O(log n)
//space
//O(1)
//100.00% faster U.U

// The API isBadVersion is defined for you.
// bool isBadVersion(int version);
int firstBadVersion(int n) {
    int left = 1;
    while(left <= n) {
        int mid = left+(n - left)/2;
        if(isBadVersion(mid)) n = mid-1;
        else left = mid+1;
    }
    return left;
}
