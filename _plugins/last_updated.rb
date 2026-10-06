# Sets `site.last_updated` to the date of the most recent git commit, for the
# "Last updated" line in the footer.
#
# It runs `git log` during the build. If there are no commits yet (or git
# isn't available), it falls back to the current time.

require "shellwords"
require "time"

module ErgodicWorks
  class LastUpdated < Jekyll::Generator
    safe true

    def generate(site)
      committed = `git -C #{site.source.shellescape} log -1 --format=%cI 2>/dev/null`.strip
      site.config["last_updated"] = committed.empty? ? Time.now : Time.parse(committed)
    end
  end
end
